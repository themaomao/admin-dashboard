import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
/*sx 属性是 Material-UI 中的样式系统，允许你为组件应用自定义的样式。你可以通过 sx 属性传递一个包含 CSS 属性和值的对象来定制组件的样式。
例如，你可以使用 sx 来设置文本元素的颜色、字重、边距等。sx 属性提供了一种灵活的方式来自定义样式，而不必创建额外的样式文件。note:sx={{}}double{}
variant =h1;variant=button;variant=subtitle - 通过指定不同的 variant，你可以应用不同样式的文本效果，比如不同的字体、字号、行高等。*/

/* how variant= filled standard outlined different? check photo on wawawa note*/
  return (
    <Box display="flex" justifyContent="space-between" p={2}> 
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
       {/* ICONS */}
       <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
// all icons wrapped by iconbutton if need interactivity.
export default Topbar;
