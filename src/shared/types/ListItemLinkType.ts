export interface IListItemProps {
    icon: string;
    to: string;
    label: string;
    onClick: (() => void) | undefined;
}