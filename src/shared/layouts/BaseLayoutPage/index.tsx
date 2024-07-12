import { Box, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'

interface IBaseLayoutPageProps {
    children: React.ReactNode;
  }

export const BaseLayoutPage: React.FC<IBaseLayoutPageProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));


    return (
        <>
            <Drawer
                variant={smDown ? "temporary" : "permanent"}
                open={true}

            >
                <Box
                    width={theme.spacing(28)}
                    display="flex"
                    flexDirection="column"
                    height="100%"
                >
                    {/* <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map((drawerOption) => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    label={drawerOption.label}
                                    to={drawerOption.path}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box> */}

                    <Box>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>
                                        {"dark_mode"}
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Modo escuro"}
                                />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(32)}>
                {children}
            </Box>
        </>
    )
}
