"use strict";(self.webpackChunk_mkp_lib_docs=self.webpackChunk_mkp_lib_docs||[]).push([[153],{"./stories/form/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllButtons:()=>AllButtons,AllSizes:()=>AllSizes,Custom:()=>Custom,Default:()=>Default,WithIcon:()=>WithIcon,default:()=>Button_stories});var _Default$parameters,_Default$parameters2,_Custom$parameters,_Custom$parameters2,_WithIcon$parameters,_WithIcon$parameters2,_AllButtons$parameter,_AllButtons$parameter2,_AllSizes$parameters,_AllSizes$parameters2,defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),AccountCircle=__webpack_require__("../../node_modules/@mui/icons-material/AccountCircle.js"),Stack=__webpack_require__("../../node_modules/@mui/material/Stack/Stack.js"),Typography=__webpack_require__("../../node_modules/@mui/material/Typography/Typography.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),Button_Button=__webpack_require__("../../node_modules/@mui/material/Button/Button.js"),_excluded=["children"],__jsx=react.createElement,Button=function Button(_ref){var children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(Button_Button.Z,rest,children)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["ButtonBaseProps"]};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"The content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"Partial<ButtonClasses> & Partial<ClassNameMap<never>>"}},color:{defaultValue:{value:"'primary'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'},{value:'"gray"'},{value:'"light"'}]}},disabled:{defaultValue:{value:"false\nfalse"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableElevation:{defaultValue:{value:"false"},description:"If `true`, no elevation is used.",name:"disableElevation",required:!1,type:{name:"boolean"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:"Element placed after the children.",name:"endIcon",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:{value:"false"},description:"If `true`, the button will take up the full width of its container.",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"The URL to link to when the button is clicked.\nIf defined, an `a` element will be used as the root node.",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},startIcon:{defaultValue:null,description:"Element placed before the children.",name:"startIcon",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},variant:{defaultValue:{value:"'text'"},description:"The variant to use.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/ui/form/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../packages/ui/form/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Button_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Button_stories={component:Button,args:{children:"Button"},argTypes:{color:{options:["primary","secondary","gray","success","error","info","warning"],control:{type:"select"}},sx:{control:{type:""}},startIcon:{control:{type:""}},endIcon:{control:{type:""}}},decorators:[function(Story){return Button_stories_jsx("div",{style:{width:"300px"}},Button_stories_jsx(Story,null))}]};var Default={args:{}},Custom={args:{variant:"contained",sx:{borderRadius:1,backgroundColor:"#F00",color:"#00F"}}},WithIcon={args:{startIcon:Button_stories_jsx(AccountCircle.Z,{style:{fontSize:24}}),variant:"contained"}},AllButtons={render:function render(){return Button_stories_jsx(Stack.Z,{spacing:2},Button_stories_jsx(Typography.Z,null,"Primary"),Button_stories_jsx(Stack.Z,{direction:"row",spacing:2,width:"600px"},Button_stories_jsx(Button,{color:"primary",variant:"contained"},"Contained"),Button_stories_jsx(Button,{color:"primary",variant:"outlined"},"Outlined"),Button_stories_jsx(Button,{color:"primary",variant:"text"},"Text")),Button_stories_jsx(Typography.Z,null,"Secondary"),Button_stories_jsx(Stack.Z,{direction:"row",spacing:2,width:"600px"},Button_stories_jsx(Button,{color:"secondary",variant:"contained"},"Contained"),Button_stories_jsx(Button,{color:"secondary",variant:"outlined"},"Outlined"),Button_stories_jsx(Button,{color:"secondary",variant:"text"},"Text")),Button_stories_jsx(Typography.Z,null,"Gray"),Button_stories_jsx(Stack.Z,{direction:"row",spacing:2,width:"600px"},Button_stories_jsx(Button,{color:"gray",variant:"contained"},"Contained"),Button_stories_jsx(Button,{color:"gray",variant:"outlined"},"Outlined"),Button_stories_jsx(Button,{color:"gray",variant:"text"},"Text")))}},AllSizes={render:function render(){return Button_stories_jsx(Stack.Z,{spacing:2},Button_stories_jsx(Typography.Z,null,"Sizes"),Button_stories_jsx(Stack.Z,{gap:2},Button_stories_jsx(Button,{color:"primary",size:"small",variant:"contained"},"Contained"),Button_stories_jsx(Button,{color:"primary",size:"medium",variant:"contained"},"Contained"),Button_stories_jsx(Button,{color:"primary",size:"large",variant:"contained"},"Contained")))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Custom.parameters=_objectSpread(_objectSpread({},Custom.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Custom$parameters=Custom.parameters)||void 0===_Custom$parameters?void 0:_Custom$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "contained",\n    sx: {\n      borderRadius: 1,\n      backgroundColor: "#F00",\n      color: "#00F"\n    }\n  }\n}'},null===(_Custom$parameters2=Custom.parameters)||void 0===_Custom$parameters2||null===(_Custom$parameters2=_Custom$parameters2.docs)||void 0===_Custom$parameters2?void 0:_Custom$parameters2.source)})}),WithIcon.parameters=_objectSpread(_objectSpread({},WithIcon.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcon$parameters=WithIcon.parameters)||void 0===_WithIcon$parameters?void 0:_WithIcon$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    startIcon: <AccountCircleIcon style={{\n      fontSize: 24\n    }} />,\n    variant: "contained"\n  }\n}'},null===(_WithIcon$parameters2=WithIcon.parameters)||void 0===_WithIcon$parameters2||null===(_WithIcon$parameters2=_WithIcon$parameters2.docs)||void 0===_WithIcon$parameters2?void 0:_WithIcon$parameters2.source)})}),AllButtons.parameters=_objectSpread(_objectSpread({},AllButtons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AllButtons$parameter=AllButtons.parameters)||void 0===_AllButtons$parameter?void 0:_AllButtons$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <Stack spacing={2}>\n            <Typography>Primary</Typography>\n            <Stack direction="row" spacing={2} width="600px">\n                <Button color="primary" variant="contained">\n                    Contained\n                </Button>\n                <Button color="primary" variant="outlined">\n                    Outlined\n                </Button>\n                <Button color="primary" variant="text">\n                    Text\n                </Button>\n            </Stack>\n\n            <Typography>Secondary</Typography>\n            <Stack direction="row" spacing={2} width="600px">\n                <Button color="secondary" variant="contained">\n                    Contained\n                </Button>\n                <Button color="secondary" variant="outlined">\n                    Outlined\n                </Button>\n                <Button color="secondary" variant="text">\n                    Text\n                </Button>\n            </Stack>\n\n            <Typography>Gray</Typography>\n            <Stack direction="row" spacing={2} width="600px">\n                <Button color="gray" variant="contained">\n                    Contained\n                </Button>\n                <Button color="gray" variant="outlined">\n                    Outlined\n                </Button>\n                <Button color="gray" variant="text">\n                    Text\n                </Button>\n            </Stack>\n        </Stack>\n}'},null===(_AllButtons$parameter2=AllButtons.parameters)||void 0===_AllButtons$parameter2||null===(_AllButtons$parameter2=_AllButtons$parameter2.docs)||void 0===_AllButtons$parameter2?void 0:_AllButtons$parameter2.source)})}),AllSizes.parameters=_objectSpread(_objectSpread({},AllSizes.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AllSizes$parameters=AllSizes.parameters)||void 0===_AllSizes$parameters?void 0:_AllSizes$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  render: () => <Stack spacing={2}>\n            <Typography>Sizes</Typography>\n            <Stack gap={2}>\n                <Button color="primary" size="small" variant="contained">\n                    Contained\n                </Button>\n                <Button color="primary" size="medium" variant="contained">\n                    Contained\n                </Button>\n                <Button color="primary" size="large" variant="contained">\n                    Contained\n                </Button>\n            </Stack>\n        </Stack>\n}'},null===(_AllSizes$parameters2=AllSizes.parameters)||void 0===_AllSizes$parameters2||null===(_AllSizes$parameters2=_AllSizes$parameters2.docs)||void 0===_AllSizes$parameters2?void 0:_AllSizes$parameters2.source)})})}}]);