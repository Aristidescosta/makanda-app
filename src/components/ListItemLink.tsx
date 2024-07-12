import { IListItemProps } from "@/shared/types/ListItemLinkType";
import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

export const ListItemLink: React.FC<IListItemProps> = ({
    to,
    icon,
    label,
    onClick,
}) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};