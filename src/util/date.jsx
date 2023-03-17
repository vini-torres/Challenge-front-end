import dayjs from "dayjs";

export const calenderDate = (
    month = dayjs().month(),
    year = dayjs().year() ) => {
        const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
        const LastDateOfMonth =  dayjs().year(year).month(month).endOf("month");
        const arrayOfDate = []

        for(let i = firstDateOfMonth.date(); i <= LastDateOfMonth.date(); i++) {
            arrayOfDate.push({
                currentMonth: true,
                date: firstDateOfMonth.date(i),
                today: firstDateOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
            })
        }

        const remaining = 35 - arrayOfDate.length;

        for (let i = LastDateOfMonth.date()+1; i <= LastDateOfMonth.date()+remaining; i++){
            arrayOfDate.push({
                currentMonth: false,
                date: LastDateOfMonth.date(i)
            })
        }

    return arrayOfDate
}
