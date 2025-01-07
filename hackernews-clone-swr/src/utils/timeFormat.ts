// course : https://github.com/midudev/aprendiendo-react/blob/master/projects/14-hacker-news-prueba-tecnica/src/utils/getRelativeTime.ts
// by midudev
const DATE_UNITS: Record<string, number> = {
    year: (60 * 60 * 24 * 30 * 12),
    month: (60 * 60 * 24 * 30),
    day: (60 * 60 * 24),
    hour: (60 * 60),
    minute: 60,
    second: 1
} as const

// timestamp formater 
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });


export const getTimeDays = (epochTime : number) => {
    const started = new Date(epochTime * 1000).getTime();
    const now = new Date().getTime();

    const elapsed = (started - now) / 1000;

    for (const unit in DATE_UNITS) {
        const absoluteElapsed = Math.abs(elapsed);
      
        if (absoluteElapsed > DATE_UNITS[unit] || unit === 'second') {
          return rtf.format(
            Math.round(elapsed / DATE_UNITS[unit]),
            unit as Intl.RelativeTimeFormatUnit
          );
        }
    }
    return '';
}