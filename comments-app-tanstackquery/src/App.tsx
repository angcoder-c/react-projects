import CommentForm from './components/commentForm'
import Comment from './components/comment'
import { queryClient } from './main'
import { useMutation, useQuery } from '@tanstack/react-query'
import fetchComments from './services/fetchComments'
import putComment from './services/putComment'
import './App.css'

export type CommentAPIType = { 
  id : string, 
  username : string, 
  message : string,
  preview? : boolean
}

function App() {

  const { isPending, error, data } = useQuery<CommentAPIType[]>({
    queryKey: ['comments'],
    queryFn: fetchComments
  })

  const {mutate, isPending : isPendingMutation, isError} = useMutation({
    mutationFn : putComment,
    onMutate : async (comment) =>{
      await queryClient.cancelQueries({
        queryKey : ['comments']
      })
      const previousComments = queryClient.getQueryData(['comments'])
      queryClient.setQueryData(['comments'], (oldData:CommentAPIType[]) => {
        const newComment = structuredClone(comment)
        newComment.preview = true
        if (oldData===null) return [newComment]
        return [...oldData, newComment]
      })
      return { previousComments }
    },
    onError : (error, variables, context) => {
      if (context?.previousComments!==null) {
        queryClient.setQueryData(['comments'], context?.previousComments)
      }
    },
    onSettled : async (data, error, variables, context)=>{
      await queryClient.invalidateQueries({
        queryKey : ['comments']
      })
    }
  })
  
  const handleSubmitForm = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isPendingMutation) return
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const username = formData.get("username") as string
    const message = formData.get("message") as string

    if (username || message) {
            mutate({ 
              id : crypto.randomUUID(), 
              username : username, 
              message : message 
            })
    }
    form.reset()
  }
  if (isPending) return 'Loading...' 

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <main>
        <h1>Comments</h1>
        <div className='comments'>
          {
            data.map(comment=>(
              <Comment
                key={comment.id}
                user={comment.username}
                message={comment.message}
                preview={comment.preview===true}
              />
            ))
          }
        </div>
      </main>
      <aside>
        <h2>New comment</h2>
        <CommentForm
          handleSubmit={handleSubmitForm}
          loading={isPendingMutation}
        />
      </aside>
    </>
  )
}

export default App
