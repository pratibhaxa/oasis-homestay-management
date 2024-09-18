import React, { useState } from "react";
import { Button, Grid, Menu, Space, theme, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import Logo from "../../assets/logo"; // You can find the code for the Logo here: https://www.antblocksui.com/blocks/navbars
import houseIcon from "./../assests/houseIcon.svg";
import { useNavigate } from "react-router-dom";

const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function Navbar() {
    const navigate = useNavigate();
    const { token } = useToken();
    const screens = useBreakpoint();

    const menuItems = [
        {
            label: "Dashboard",
            key: "dashboard",
        },
        {
            label: "Properties",
            key: "properties",
        },
        {
            label: "Actions",
            key: "SubMenu",
            children: [
                {
                    label: "Add Property",
                    key: "addproperty",
                },
                {
                    label: "View Property",
                    key: "viewproperty",
                },
            ],
        },
        {
            label: "Settings",
            key: "settings",
        },
    ];

    const [current, setCurrent] = useState("dashboard");
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
        navigate('/' + e.key);
    };

    const styles = {
        container: {
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
            maxWidth: token.screenXL,
            padding: screens.md
                ? `0px ${token.paddingLG}px`
                : `0px ${token.padding}px`,
        },
        header: {
            backgroundColor: token.colorBgContainer,
            borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
            position: "relative",
        },
        logo: {
            display: "block",
            height: token.sizeLG,
            left: "50%",
            position: screens.md ? "static" : "absolute",
            top: "50%",
            transform: screens.md ? " " : "translate(-50%, -50%)",
        },
        menu: {
            backgroundColor: "transparent",
            borderBottom: "none",
            lineHeight: screens.sm ? "4rem" : "3.5rem",
            marginLeft: screens.md ? "0px" : `-${token.size}px`,
            width: screens.md ? "inherit" : token.sizeXXL,
        },
        menuContainer: {
            alignItems: "center",
            display: "flex",
            gap: token.size,
            width: "100%",
        },
    };

    return (
        <nav style={styles.header}>
            <div style={styles.container}>
                <div style={styles.menuContainer}>
                    <img src={houseIcon} alt="House Icon" width={40} height={40} />
                    {/* <Typography>StayEye</Typography> */}
                    <Menu
                        style={styles.menu}
                        mode="horizontal"
                        items={menuItems}
                        onClick={onClick}
                        selectedKeys={screens.md ? [current] : ""}
                        overflowedIndicator={
                            <Button
                                type="text"
                                icon={<MenuOutlined />}
                            ></Button>
                        }
                    />
                </div>
                <Space>
                    {screens.md ? <Button type="text">Log in</Button> : ""}
                    <Button type="primary">Sign up</Button>
                </Space>
            </div>
        </nav>
    );
}
