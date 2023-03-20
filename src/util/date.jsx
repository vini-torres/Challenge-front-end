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

        const anotherMonth = 35 - arrayOfDate.length;

        for (let i = LastDateOfMonth.date()+1; i <= LastDateOfMonth.date() + anotherMonth; i++){
            arrayOfDate.push({
                currentMonth: false,
                date: LastDateOfMonth.date(i)
            })
        }

    return arrayOfDate
}

export const cardDate = [
    {
        id: 1,
        title: 'Pró-Labore: Luiz Antônio Teixeira...',
        receita: 'Salário',
        value: 'R$ 10.000,00',
        isTrue: true,
    },
    {
        id: 2,
        title: 'Prestação de Serviços: Delta Code...',
        receita: 'Receita',
        value: 'R$ 12.050,00',
        isTrue: true,
    },
    {
        id: 3,
        title: 'FGTS: Joãozinho de Jesus',
        receita: 'Imposto',
        value: 'R$ 1.680,72',
        isTrue: false,
    }
]


export const months = [
    {id: 0, month: "Janeiro"},
    {id: 1, month: "Fevereiro"},
    {id: 2, month: "Março"},
    {id: 3, month: "Abril"},
    {id: 4, month: "Maio"},
    {id: 5, month: "Junho"},
    {id: 6, month: "Julho"},
    {id: 7, month: "Agosto"},
    {id: 8, month: "Setembro"},
    {id: 9, month: "Outubro"},
    {id: 10, month: "Novembro"},
    {id: 11, month: "Dezembro"},
]

export const years = [ 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
