(self.webpackChunk_mkp_lib_docs=self.webpackChunk_mkp_lib_docs||[]).push([[179],{"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./form/Button.stories":["./stories/form/Button.stories.tsx",477,153],"./form/Button.stories.tsx":["./stories/form/Button.stories.tsx",477,153]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(ts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../node_modules/@storybook/react/preview.js"),__webpack_require__("../../node_modules/@storybook/nextjs/dist/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-links/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-interactions/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"../../node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview,globalTypes:()=>globalTypes,withMuiTheme:()=>withMuiTheme});var _body,react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),ThemeProvider=__webpack_require__("../../node_modules/@mui/material/styles/ThemeProvider.js"),CssBaseline=__webpack_require__("../../node_modules/@mui/material/CssBaseline/CssBaseline.js"),createTheme=__webpack_require__("../../node_modules/@mui/material/styles/createTheme.js"),polished_esm=__webpack_require__("../../node_modules/polished/dist/polished.esm.js"),defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),google=__webpack_require__('../../node_modules/@storybook/nextjs/dist/font/webpack/loader/storybook-nextjs-font-loader.js?{"source":"next/font/google","props":{"weight":["700","600","500","400","300"],"style":"normal","subsets":["latin"],"display":"swap"},"fontFamily":"Cairo","filename":"/home/rhuanbello/www/work/office-trends/portal/portal-ui/packages/config/src/fonts/index.ts"}!../../node_modules/next/font/google/index.js'),google_default=__webpack_require__.n(google),theme=(0,createTheme.Z)(),defaultTheme=(0,createTheme.Z)(theme,{components:{MuiCssBaseline:{styleOverrides:{body:(_body={},(0,defineProperty.Z)(_body,theme.breakpoints.up("lg"),{fontSize:"1rem"}),(0,defineProperty.Z)(_body,theme.breakpoints.down("md"),{fontSize:"0.75rem"}),_body)}},MuiButton:{styleOverrides:{root:{fontFamily:"inherit",fontSize:16,fontWeight:400,borderRadius:theme.spacing(5),textTransform:"none",width:"100%",boxShadow:"none"}}},MuiDialogActions:{styleOverrides:{root:{padding:"16px 24px"}}},MuiTablePagination:{styleOverrides:{spacer:{display:"none"},displayedRows:{marginLeft:"auto"}}},MuiFormControl:{styleOverrides:{root:{width:"100%"}}},MuiButtonBase:{styleOverrides:{root:{color:"#9CA5AE",fontSize:20}}},MuiFormControlLabel:{styleOverrides:{root:{color:"#50555A"}}},MuiPaper:{styleOverrides:{root:{boxShadow:"0px 3px 26px #9090901F"}}},MuiTypography:{styleOverrides:{root:{fontFamily:"inherit"}},defaultProps:{fontFamily:google_default().style.fontFamily}},MuiInputBase:{styleOverrides:{root:{fontFamily:"inherit"}},defaultProps:{}},MuiFormLabel:{styleOverrides:{root:{fontFamily:"inherit"}},defaultProps:{}},MuiTableContainer:{styleOverrides:{root:{backgroundColor:"#fff",boxShadow:"0px 3px 26px #9090901F"}}},MuiTableHead:{styleOverrides:{root:{backgroundColor:"#fff"}}},MuiTableRow:{styleOverrides:{root:{"&:nth-of-type(odd)":{backgroundColor:"#F8FBFC"}},head:{backgroundColor:"#fff !important"}}},MuiTableCell:{styleOverrides:{footer:{width:"100%",backgroundColor:"#fff"},head:{fontSize:"0.875rem",fontWeight:"600"}}},MuiTab:{styleOverrides:{root:{"&:not(:first-of-type)":{marginLeft:"0.5rem"},textTransform:"none",fontSize:"1rem",background:"transparent linear-gradient(180deg, #F4F4F4 0%, #DBDBDB 100%) 0% 0% no-repeat padding-box;","&.Mui-selected":{background:"#fff"}}}},MuiStepLabel:{styleOverrides:{iconContainer:{paddingRight:0}}}}}),buttonVariants=[{props:{size:"small"},style:{fontSize:14,padding:"8px 16px 8px 16px"}},{props:{size:"medium"},style:{fontSize:16,padding:"16px 24px 16px 24px"}},{props:{size:"large"},style:{fontSize:18,padding:"16px 24px 16px 24px"}}],paletteColors_primary="#D9782D",paletteColors_secondary="#5AA69D",paletteColors_terciary="#9A8F65",paletteColors_black="#4F4F4F",paletteColors_neutral="#E4E4E4",paletteColors_gray="#868686",paletteColors_red="#f44336",paletteColors_success="#4caf50";const help={name:"Help",theme:(0,createTheme.Z)(defaultTheme,{palette:{primary:{main:paletteColors_primary},secondary:{main:paletteColors_secondary},terciary:{main:paletteColors_terciary},background:{main:"#F4F5F6",secondary:"#FFF"},black:{main:paletteColors_black},neutral:{main:paletteColors_neutral},gray:{main:paletteColors_gray,secondary:"#B9BFC7"},red:{main:paletteColors_red},success:{main:paletteColors_success},contrastBox:{main:"#FFF",secondary:"#F5F5F5",overLight:"#F5F5F5",chart:"#eae1d8"},table:{evenLine:"#F5F5F5"},title:{kpis:paletteColors_primary},report:{text:paletteColors_primary,table:{primary:paletteColors_primary,secondary:paletteColors_primary,terciary:"#969798"},circleLine:paletteColors_secondary,line:paletteColors_primary}},logo:{width:132,height:74},components:{MuiOutlinedInput:{styleOverrides:{root:{"& fieldset":{borderColor:paletteColors_primary},"&:hover fieldset":{borderColor:paletteColors_secondary},"&.Mui-focused fieldset":{borderColor:paletteColors_primary},"input.Mui-disabled":{WebkitTextFillColor:paletteColors_secondary,color:paletteColors_secondary,backgroundColor:"#EEE"}}}},MuiInputBase:{styleOverrides:{root:{".MuiOutlinedInput-input":{WebkitTextFillColor:paletteColors_secondary,color:paletteColors_secondary},fontSize:"0.875rem","&.Mui-disabled":{WebkitTextFillColor:paletteColors_secondary,color:paletteColors_secondary,backgroundColor:"#EEE"},input:{color:paletteColors_secondary},"&.Mui-focused":{input:{color:paletteColors_secondary}}}}},MuiInputLabel:{styleOverrides:{root:{color:paletteColors_primary,fontSize:"0.875rem","&.Mui-focused":{color:paletteColors_primary},"&.Mui-disabled":{color:paletteColors_primary,fontWeight:"bold"}}}},MuiListItemButton:{styleOverrides:{root:{"&:hover":{background:"linear-gradient(to right, ".concat((0,polished_esm._j)(.05,paletteColors_primary)," 0%, transparent 100%) 0% 0% no-repeat !important"),".MuiListItemIcon-root .MuiSvgIcon-root":{color:paletteColors_secondary},".MuiListItemText-primary":{fontWeight:"bold"}},".MuiListItemText-primary":{color:"white !important",fontSize:"0.875rem"},"&.Mui-selected":{background:(0,polished_esm._j)(.04,paletteColors_primary),".MuiListItemText-primary":{color:paletteColors_primary,fontWeight:"bold"},".MuiSvgIcon-root":{color:paletteColors_secondary}}}}},MuiButton:{styleOverrides:{containedPrimary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,paletteColors_primary)}},containedSecondary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,paletteColors_secondary)}},containedGray:{color:"#FFF","&:hover":{backgroundColor:(0,polished_esm._j)(.05,paletteColors_gray)}},textPrimary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textSecondary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textGray:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}}},variants:buttonVariants},MuiTab:{styleOverrides:{root:{color:paletteColors_primary}}},MuiStep:{styleOverrides:{root:{"& .MuiTypography-root.MuiTypography-caption":{color:"#000000DE"},"&.Mui-completed .MuiTypography-root.MuiTypography-caption":{color:paletteColors_secondary}}}},MuiAutocomplete:{styleOverrides:{noOptions:{fontSize:"0.875rem"},root:{"& .MuiSvgIcon-root":{color:paletteColors_secondary}},paper:{border:"1px solid ".concat(paletteColors_primary),"& .MuiAutocomplete-option":{fontSize:"0.875rem","&:hover":{backgroundColor:"#E3E4E5"}}}}},MuiFormHelperText:{styleOverrides:{root:{color:paletteColors_red,marginLeft:0}}}}}),favicon:"/icons/help.png",link:"https://portal.wizsaude.com.br/"};var meprotege_paletteColors_primary="#EB145F",meprotege_paletteColors_secondary="#F69420",meprotege_paletteColors_terciary="#F15440",meprotege_paletteColors_black="#4F4F4F",meprotege_paletteColors_neutral="#F5F5F5",meprotege_paletteColors_gray="#868686",meprotege_paletteColors_red="#f44336",meprotege_paletteColors_success="#4caf50";const meprotege={name:"Me Protege",theme:(0,createTheme.Z)(defaultTheme,{palette:{primary:{main:meprotege_paletteColors_primary},secondary:{main:meprotege_paletteColors_secondary},terciary:{main:meprotege_paletteColors_terciary},background:{main:"#F5F5F5",secondary:"#FFF"},black:{main:meprotege_paletteColors_black},neutral:{main:meprotege_paletteColors_neutral},gray:{main:meprotege_paletteColors_gray,secondary:"#B9BFC7"},red:{main:meprotege_paletteColors_red},success:{main:meprotege_paletteColors_success},contrastBox:{main:"#FFF",secondary:"#E4E4E4",overLight:"#E4E4E4",chart:"#eae1d8"},table:{evenLine:"#E4E4E4"},title:{kpis:meprotege_paletteColors_primary},report:{text:meprotege_paletteColors_primary,table:{primary:meprotege_paletteColors_primary,secondary:meprotege_paletteColors_primary,terciary:"#969798"},circleLine:meprotege_paletteColors_secondary,line:meprotege_paletteColors_primary}},logo:{width:145,height:90},components:{MuiOutlinedInput:{styleOverrides:{root:{"& fieldset":{borderColor:meprotege_paletteColors_primary},"&:hover fieldset":{borderColor:meprotege_paletteColors_secondary},"&.Mui-focused fieldset":{borderColor:meprotege_paletteColors_primary},"input.Mui-disabled":{WebkitTextFillColor:meprotege_paletteColors_secondary,color:meprotege_paletteColors_secondary,backgroundColor:"#EEE"}}}},MuiInputBase:{styleOverrides:{root:{".MuiOutlinedInput-input":{WebkitTextFillColor:meprotege_paletteColors_secondary,color:meprotege_paletteColors_secondary},fontSize:"0.875rem","&.Mui-disabled":{WebkitTextFillColor:meprotege_paletteColors_secondary,color:meprotege_paletteColors_secondary,backgroundColor:"#EEE"},input:{color:meprotege_paletteColors_secondary},"&.Mui-focused":{input:{color:meprotege_paletteColors_secondary}}}}},MuiInputLabel:{styleOverrides:{root:{color:meprotege_paletteColors_primary,fontSize:"0.875rem","&.Mui-focused":{color:meprotege_paletteColors_primary},"&.Mui-disabled":{color:meprotege_paletteColors_primary,fontWeight:"bold"}}}},MuiListItemButton:{styleOverrides:{root:{"&:hover":{background:"linear-gradient(to right, ".concat((0,polished_esm._j)(.05,meprotege_paletteColors_primary)," 0%, transparent 100%) 0% 0% no-repeat !important"),".MuiListItemIcon-root .MuiSvgIcon-root":{color:meprotege_paletteColors_secondary},".MuiListItemText-primary":{fontWeight:"bold"}},".MuiListItemText-primary":{color:"white !important",fontSize:"0.875rem"},"&.Mui-selected":{background:(0,polished_esm._j)(.04,meprotege_paletteColors_primary),".MuiListItemText-primary":{color:meprotege_paletteColors_primary,fontWeight:"bold"},".MuiSvgIcon-root":{color:meprotege_paletteColors_secondary}}}}},MuiButton:{styleOverrides:{containedPrimary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,meprotege_paletteColors_primary)}},containedSecondary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,meprotege_paletteColors_secondary)}},containedGray:{color:"#FFF","&:hover":{backgroundColor:(0,polished_esm._j)(.05,meprotege_paletteColors_gray)}},textPrimary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textSecondary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textGray:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}}},variants:buttonVariants},MuiTab:{styleOverrides:{root:{color:meprotege_paletteColors_primary}}},MuiStep:{styleOverrides:{root:{"& .MuiTypography-root.MuiTypography-caption":{color:"#000000DE"},"&.Mui-completed .MuiTypography-root.MuiTypography-caption":{color:meprotege_paletteColors_secondary}}}},MuiAutocomplete:{styleOverrides:{noOptions:{fontSize:"0.875rem"},root:{"& .MuiSvgIcon-root":{color:meprotege_paletteColors_secondary}},paper:{border:"1px solid ".concat(meprotege_paletteColors_primary),"& .MuiAutocomplete-option":{fontSize:"0.875rem","&:hover":{backgroundColor:"#E3E4E5"}}}}},MuiFormHelperText:{styleOverrides:{root:{color:meprotege_paletteColors_red,marginLeft:0}}}}}),favicon:"/icons/meprotege.png",link:"https://portal.wizsaude.com.br/"};var positiva_paletteColors_primary="#00b2e2",positiva_paletteColors_secondary="#2b328c",positiva_paletteColors_terciary="#1672B7",positiva_paletteColors_black="#50555A",positiva_paletteColors_neutral="#808080",positiva_paletteColors_background="#CECECE",positiva_paletteColors_gray="#868686",positiva_paletteColors_red="#f44336",positiva_paletteColors_success="#4caf50";const positiva={name:"Positiva",theme:(0,createTheme.Z)(defaultTheme,{palette:{primary:{main:positiva_paletteColors_primary},secondary:{main:positiva_paletteColors_secondary},terciary:{main:positiva_paletteColors_terciary},background:{main:positiva_paletteColors_background,secondary:"#FFF"},black:{main:positiva_paletteColors_black},neutral:{main:positiva_paletteColors_neutral},gray:{main:positiva_paletteColors_gray,secondary:"#B9BFC7"},red:{main:positiva_paletteColors_red},success:{main:positiva_paletteColors_success},contrastBox:{main:"#FFF",secondary:"#EAEAEA",overLight:"#F8F7F5",chart:"#E5E5E5"},table:{evenLine:"#EAEAEA"},title:{kpis:positiva_paletteColors_secondary},report:{text:positiva_paletteColors_secondary,table:{primary:positiva_paletteColors_secondary,secondary:"#FFF",terciary:"#969798"},circleLine:positiva_paletteColors_primary,line:positiva_paletteColors_secondary}},logo:{width:130,height:50},components:{MuiOutlinedInput:{styleOverrides:{root:{"& fieldset":{borderColor:positiva_paletteColors_primary},"&:hover fieldset":{borderColor:positiva_paletteColors_secondary},"&.Mui-focused fieldset":{borderColor:positiva_paletteColors_primary},"input.Mui-disabled":{WebkitTextFillColor:positiva_paletteColors_secondary,color:positiva_paletteColors_secondary,backgroundColor:"#EEE"}}}},MuiInputBase:{styleOverrides:{root:{".MuiOutlinedInput-input":{WebkitTextFillColor:positiva_paletteColors_secondary,color:positiva_paletteColors_secondary},fontSize:"0.875rem","&.Mui-disabled":{WebkitTextFillColor:positiva_paletteColors_secondary,color:positiva_paletteColors_secondary,backgroundColor:"#EEE"},input:{color:positiva_paletteColors_secondary},"&.Mui-focused":{input:{color:positiva_paletteColors_secondary}}}}},MuiInputLabel:{styleOverrides:{root:{color:positiva_paletteColors_secondary,fontSize:"0.875rem","&.Mui-focused":{color:positiva_paletteColors_secondary},"&.Mui-disabled":{color:positiva_paletteColors_primary,fontWeight:"bold"}}}},MuiListItemButton:{styleOverrides:{root:{"&:hover":{background:"linear-gradient(to right, ".concat((0,polished_esm._j)(.05,positiva_paletteColors_primary)," 0%, transparent 100%) 0% 0% no-repeat !important"),".MuiListItemIcon-root .MuiSvgIcon-root":{color:positiva_paletteColors_secondary},".MuiListItemText-primary":{fontWeight:"bold"}},".MuiListItemText-primary":{color:"white !important",fontSize:"0.875rem"},"&.Mui-selected":{background:(0,polished_esm._j)(.04,positiva_paletteColors_primary),".MuiListItemText-primary":{color:positiva_paletteColors_primary,fontWeight:"bold"},".MuiSvgIcon-root":{color:positiva_paletteColors_secondary}}}}},MuiButton:{styleOverrides:{containedPrimary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,positiva_paletteColors_primary)}},containedSecondary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,positiva_paletteColors_secondary)}},containedGray:{color:"#FFF","&:hover":{backgroundColor:(0,polished_esm._j)(.05,positiva_paletteColors_gray)}},textPrimary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textSecondary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textGray:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}}},variants:buttonVariants},MuiTab:{styleOverrides:{root:{color:positiva_paletteColors_primary}}},MuiStep:{styleOverrides:{root:{"& .MuiTypography-root.MuiTypography-caption":{color:"#000000DE"},"&.Mui-completed .MuiTypography-root.MuiTypography-caption":{color:positiva_paletteColors_secondary}}}},MuiAutocomplete:{styleOverrides:{noOptions:{fontSize:"0.875rem"},root:{"& .MuiSvgIcon-root":{color:positiva_paletteColors_secondary}},paper:{border:"1px solid ".concat(positiva_paletteColors_primary),"& .MuiAutocomplete-option":{fontSize:"0.875rem","&:hover":{backgroundColor:"#E3E4E5"}}}}},MuiFormHelperText:{styleOverrides:{root:{color:positiva_paletteColors_red,marginLeft:0}}}}}),favicon:"/icons/positiva.png",link:"https://portal.positiva.com.br/"};var wiz_paletteColors_primary="#7F2566",wiz_paletteColors_secondary="#FF8200",wiz_paletteColors_terciary="#FAC601",wiz_paletteColors_background="#F6EFE6",wiz_paletteColors_black="#152332",wiz_paletteColors_neutral="#F8EFE8",wiz_paletteColors_gray="#868686",wiz_paletteColors_red="#f44336",wiz_paletteColors_success="#4caf50";var whiteLabel={wiz:{name:"Wiz Mais Você",theme:(0,createTheme.Z)(defaultTheme,{palette:{primary:{main:wiz_paletteColors_primary},secondary:{main:wiz_paletteColors_secondary},terciary:{main:wiz_paletteColors_terciary},background:{main:wiz_paletteColors_background,secondary:wiz_paletteColors_background},black:{main:wiz_paletteColors_black},neutral:{main:wiz_paletteColors_neutral},gray:{main:wiz_paletteColors_gray,secondary:"#B9BFC7"},red:{main:wiz_paletteColors_red},success:{main:wiz_paletteColors_success},contrastBox:{main:"#F8F7F5",secondary:"#FFF",overLight:"#F6EFE6",chart:"#eae1d8"},table:{evenLine:"#F8F7F5"},title:{kpis:wiz_paletteColors_primary},report:{text:wiz_paletteColors_primary,table:{primary:wiz_paletteColors_primary,secondary:wiz_paletteColors_primary,terciary:"#ECDDCF"},circleLine:wiz_paletteColors_secondary,line:wiz_paletteColors_primary}},logo:{width:160,height:52},components:{MuiOutlinedInput:{styleOverrides:{root:{"& fieldset":{borderColor:"#B9BFC7"},"&:hover fieldset":{borderColor:"red"},"&.Mui-focused fieldset":{borderColor:"red"},"input.Mui-disabled":{color:wiz_paletteColors_secondary},"&.Mui-disabled":{backgroundColor:"#B9BFC7"},backgroundColor:"#FFF",borderRadius:"6px"}}},MuiInputBase:{styleOverrides:{root:{".MuiOutlinedInput-input":{color:"#868686","&::placeholder":{color:"#000"}},fontSize:16,"&.Mui-disabled":{color:wiz_paletteColors_secondary},input:{color:wiz_paletteColors_secondary},"&.Mui-focused":{input:{color:"#868686"}}}}},MuiInputLabel:{styleOverrides:{root:{color:wiz_paletteColors_primary,fontSize:"0.875rem","&.Mui-focused":{color:wiz_paletteColors_primary}}}},MuiListItemButton:{styleOverrides:{root:{"&:hover":{background:"linear-gradient(to right, ".concat((0,polished_esm._j)(.05,wiz_paletteColors_primary)," 0%, transparent 100%) 0% 0% no-repeat !important"),".MuiListItemIcon-root .MuiSvgIcon-root":{color:wiz_paletteColors_secondary},".MuiListItemText-primary":{fontWeight:"bold"}},".MuiListItemText-primary":{color:"white !important",fontSize:"0.875rem"},"&.Mui-selected":{background:(0,polished_esm._j)(.04,wiz_paletteColors_primary),".MuiListItemText-primary":{color:wiz_paletteColors_primary,fontWeight:"bold"},".MuiSvgIcon-root":{color:wiz_paletteColors_secondary}}}}},MuiButton:{styleOverrides:{containedPrimary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,wiz_paletteColors_primary)}},containedSecondary:{"&:hover":{backgroundColor:(0,polished_esm._j)(.05,wiz_paletteColors_secondary)}},containedGray:{color:"#FFF","&:hover":{backgroundColor:(0,polished_esm._j)(.05,wiz_paletteColors_gray)}},textPrimary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textSecondary:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}},textGray:{"&:hover":{textDecoration:"underline",backgroundColor:"transparent"}}},variants:buttonVariants},MuiTab:{styleOverrides:{root:{color:wiz_paletteColors_primary}}},MuiStep:{styleOverrides:{root:{"&.Mui-completed .MuiTypography-root.MuiTypography-caption":{color:wiz_paletteColors_secondary}}}},MuiDialogTitle:{styleOverrides:{root:{backgroundColor:wiz_paletteColors_primary,color:"white",fontWeight:400,fontSize:25,textAlign:"center"}}},MuiAutocomplete:{styleOverrides:{noOptions:{fontSize:"0.875rem"},root:{"& .MuiSvgIcon-root":{fontSize:25,color:wiz_paletteColors_primary}},paper:{border:"1px solid ".concat(wiz_paletteColors_primary),"& .MuiAutocomplete-option":{fontSize:"1rem"}},inputRoot:{fontSize:16}}},MuiFormHelperText:{styleOverrides:{root:{color:wiz_paletteColors_red,marginLeft:0}}}}}),favicon:"/icons/wiz.png",link:"https://portal.wizsaude.com.br/"},positiva,meprotege,help},__jsx=(__webpack_require__("../../node_modules/@fontsource/cairo/300.css"),__webpack_require__("../../node_modules/@fontsource/cairo/400.css"),__webpack_require__("../../node_modules/@fontsource/cairo/500.css"),__webpack_require__("../../node_modules/@fontsource/cairo/600.css"),__webpack_require__("../../node_modules/@fontsource/cairo/700.css"),__webpack_require__("../../node_modules/@fontsource/material-icons/index.css"),react.createElement),globalTypes={theme:{name:"White Label",title:"White Label",description:"White Label Theme",defaultValue:"wiz",toolbar:{icon:"paintbrush",dynamicTitle:!0,items:[{value:"wiz",left:"🟣",title:"Wiz Saúde"},{value:"positiva",left:"🔵",title:"Positiva"},{value:"meprotege",left:"🔴",title:"Me Protege"},{value:"help",left:"🟠",title:"Help"}]}}},withMuiTheme=function withMuiTheme(Story,context){var themeKey=context.globals.theme,theme=(0,react.useMemo)((function(){return function getWhiteLabel(env){return whiteLabel[env]}(themeKey||"wiz").theme}),[themeKey]);return __jsx("main",{className:google_default().className},__jsx(ThemeProvider.Z,{theme},__jsx(CssBaseline.ZP,null),__jsx(Story,null)))};withMuiTheme.displayName="withMuiTheme";const _storybook_preview={parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#FFFFFF"},{name:"dark",value:"#333333"}]},actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}}},decorators:[withMuiTheme]};withMuiTheme.__docgenInfo={description:"",methods:[],displayName:"withMuiTheme"}},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[246],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);