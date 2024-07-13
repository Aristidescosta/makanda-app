interface IDrawerOptionsProps {
    id: number,
    path: string,
    name: string
}

export const DRAWER_OPTIONS: IDrawerOptionsProps[] = [
    {
        id: 1,
        path: "/",
        name: "Principal"
    },
    {
        id: 2,
        path: "/schedule",
        name: "Agendados"
    },
    {
        id: 3,
        path: "/trend",
        name: "Tendências"
    },
    {
        id: 4,
        path: "/blog",
        name: "Blog"
    },
]