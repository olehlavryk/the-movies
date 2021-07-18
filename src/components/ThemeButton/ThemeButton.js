import React from "react";
import { Icon } from 'src/components/Icons/Icon';
import { Button } from "src/components/Button/Button.js"
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "src/store/selectors";
import { toggleTheme } from "src/store/actions";
import "./ThemeButton.css";

const ThemeButton = () => {
    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    }

    return (
        (theme === 'light') ?
            <Button onClick={handleToggleTheme}
                Icon={<Icon name="moon" size="16px" />}
            /> :
            <Button onClick={handleToggleTheme}
                Icon={<Icon name="sun" size="16px" />}
            />
    )
}

export default ThemeButton;