(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-059144aa"],{"4a13":function(e,n,i){"use strict";i.r(n);var o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"p-grid"},[i("div",{staticClass:"p-col-12"},[i("div",{staticClass:"card docs"},[i("h4",[e._v("Current Version")]),i("p",[e._v("Vue 2.6.0 and PrimeVue 2.x")]),i("h4",[e._v("Getting Started")]),e._m(0),i("pre",[e._v("npm install\n")]),e._v("\n\n                or\n\n"),i("pre",[e._v("yarn\n")]),e._m(1),i("pre",[e._v("npm run serve\n")]),i("h4",[e._v("Vue CLI Scripts")]),i("p",[e._v("Following commands are derived from create-app-app.")]),i("pre",[e._v('"npm run serve": Starts the development server\n"npm run build": Builds the application for deployment.\n"npm run lint": Executes the lint checks.\n"npm run test:unit": Runs the tests.\n')]),i("h4",[e._v("Structure")]),e._m(2),i("h4",[e._v("Templates")]),e._m(3),i("CodeHighlight",[[e._v('\n<template>\n    <div :class="containerClass" @click="onWrapperClick">\n        <AppTopBar @menu-toggle="onMenuToggle" />\n\n        <transition name="layout-sidebar">\n            <div :class="sidebarClass" @click="onSidebarClick" v-show="isSidebarVisible()">\n                <div class="layout-logo">\n                    <router-link to="/">\n                        <img alt="Logo" :src="logo" />\n                    </router-link>\n                </div>\n\n                <AppProfile />\n                <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />\n            </div>\n        </transition>\n\n        <div class="layout-main">\n            <router-view />\n        </div>\n\n        <AppConfig :layoutMode="layoutMode" :layoutColorMode="layoutColorMode" @layout-change="onLayoutChange" @layout-color-change="onLayoutColorChange"/>\n\n        <AppFooter />\n    </div>\n</template>\n')]],2),i("h4",[e._v("Menu")]),e._m(4),i("CodeHighlight",{attrs:{lang:"js"}},[e._v("\ndata() {\n    return {\n        menu : [\n            {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},\n            {\n                label: 'UI KIT', icon: 'pi pi-fw pi-sitemap',\n                items: [\n                    {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},\n                    {label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},\n                    {label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},\n                    {label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},\n                    {label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},\n                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},\n                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},\n                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},\n                    {label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},\n                    {label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},\n                    {label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},\n                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},\n                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},\n                ]\n            },\n            {\n                label: \"Utilities\", icon:'pi pi-fw pi-globe',\n                items: [\n                    {label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},\n                    {label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},\n                    {label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},\n                    {label: 'Icons', icon:'pi pi-fw pi-search', to:'/icons'},\n                    {label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},\n                    {label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},\n                    {label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'},\n                    {label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},\n                ]\n            },\n            {\n                label: 'Pages', icon: 'pi pi-fw pi-clone',\n                items: [\n                    {label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},\n                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},\n                    {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}\n                ]\n            },\n            {\n                label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',\n                items: [\n                    {\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            },\n                        ]\n                    },\n                    {\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',\n                        items: [\n                            {\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},\n                                ]\n                            },\n                            {\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',\n                                items: [\n                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},\n                                    {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}\n                                ]\n                            }\n                        ]\n                    }\n                ]\n            },\n            {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = \"#/documentation\"}},\n            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = \"https://github.com/primefaces/sigma\"}}\n        ]\n    }\n}\n")]),i("h4",[e._v("Dependencies")]),i("p",[e._v("Dependencies of Sigma are listed below and needs to be added to package.json. Sigma has no direct dependency, even PrimeVue components are an optional dependency..")]),i("CodeHighlight",{attrs:{lang:"js"}},[e._v('\n{\n    "primevue": "^1.0.0-rc.6",         //optional: PrimeVue components\n    "primeicons": "2.0.0",             //optional: Icons\n    "primeflex": "1.0.0",              //optional: Grid system\n}\n')]),i("h4",[e._v("Saga Theme")]),i("p",[e._v("Sigma uses the free Saga-Blue which is a free theme distributed within PrimeVue, however it can be used with any PrimeVue theme as well.")]),i("h4",[e._v("SASS Variables")]),e._m(5),i("h3",[e._v("src/assets/_vaiables.scss")]),i("CodeHighlight",{attrs:{lang:"css"}},[e._v("\n/* General */\n$fontSize:14px;\n$bodyBgColor:#edf0f5;\n$textColor:#333333;\n$textSecondaryColor:#707070;\n$borderRadius:3px;\n$dividerColor:#e3e3e3;\n$transitionDuration:.2s;\n$maskBgColor:#424242;\n$focusShadowColor:#8dcdff;\n\n\n/* Menu */\n$menuitemBadgeBgColor:#007be5;\n$menuitemBadgeColor:#ffffff;\n$submenuFontSize:13px;\n\n/* Menu Dark*/\n$menuDarkBgColorFirst:#4d505b;\n$menuDarkBgColorLast:#3b3e47;\n$menuitemDarkColor:#ffffff;\n$menuitemDarkHoverColor:#0388e5;\n$menuitemDarkActiveColor:#0388e5;\n$menuitemDarkActiveBgColor:#2e3035;\n$menuitemDarkBorderColor:rgba(52, 56, 65, 0.6);\n\n/* Menu Light*/\n$menuBgColorFirst:#f3f4f9;\n$menuBgColorLast:#d7dbe8;\n$menuitemColor:#232428;\n$menuitemHoverColor:#0388e5;\n$menuitemActiveColor:#0388e5;\n$menuitemActiveBgColor:#ffffff;\n$menuitemBorderColor:rgba(207, 211, 224, 0.6);\n\n/* Topbar */\n$topbarLeftBgColor:#0388E5;\n$topbarRightBgColor:#07BDF4;\n$topbarItemBadgeBgColor:#ef6262;\n$topbarItemBadgeColor:#ffffff;\n$topbarItemColor:#ffffff;\n$topbarItemHoverColor:#77c7ff;\n$topbarSearchInputBorderBottomColor:#ffffff;\n$topbarSearchInputColor:#ffffff;\n\n/* Footer */\n$footerBgColor:#ffffff;\n")]),i("h4",[e._v("Menu Modes")]),e._m(6),e._m(7),i("p",[e._v("For example to create an overlay menu, the div element should be in following form;")]),i("CodeHighlight",[e._v('\n<div class="layout-wrapper layout-static">\n')]),i("p",[e._v("It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\n                    application has an example implementation of such use case with a computed property. Refer to App.vue for an example.")]),i("h4",[e._v("Menu Color Scheme")]),e._m(8),i("b",[e._v("Dark Menu")]),i("CodeHighlight",[e._v('\n<div class="layout-sidebar layout-sidebar-dark">\n')]),i("b",[e._v("Light Menu")]),i("CodeHighlight",[e._v('\n<div class="layout-sidebar layout-sidebar-light">\n')]),i("h4",[e._v("Grid CSS")]),e._m(9),i("h4",[e._v("Customizing Styles")]),e._m(10)],1)])])},t=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Sigma is an application template for Vue based on the "),i("a",{attrs:{href:"https://cli.vuejs.org/"}},[e._v("Vue CLI")]),e._v(" that provides out-of-the-box standard\n                tooling for Vue projects. To get started, clone the "),i("a",{attrs:{href:"https://github.com/primefaces/sigma-vue"}},[e._v("repository")]),e._v(" from GitHub and install the dependencies with npm or yarn.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Next step is running the application using the serve script and navigate to "),i("b",[e._v("http://localhost:8080/")]),e._v(" to view the application.\n                    That is it, you may now start with the development of your application using the Sigma template.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Sigma consists of 2 main parts; the application layout and the resources. "),i("i",[e._v("App.vue")]),e._v(" inside src folder is the main component containing the template for the base layout\n                    whereas required resources such as SASS structure for the layout are placed inside the "),i("b",[e._v("src/assets/layout")]),e._v(" folder.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Main layout is the template of the "),i("i",[e._v("App.vue")]),e._v(", it is divided into a couple of child components such as topbar, profile, menu and footer. Here is template of the\n                    "),i("i",[e._v("App.vue")]),e._v(" component that implements the logic such as menu state, layout modes and so on.\n                ")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Menu is a separate component defined in "),i("i",[e._v("AppMenu.vue")]),e._v(" file based on PrimeNG MenuModel API. In order to define the menuitems,\n                    navigate to data section of "),i("i",[e._v("App.vue")]),e._v(" file and define your own model as a nested structure using the menu property.\n                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("In case you'd like to customize the layout variables, open "),i("i",[e._v("_variables.scss")]),e._v(" file under src/layout folder. Saving the changes\n                    will be reflected instantly at your browser.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Menu has 2 modes, "),i("i",[e._v("static")]),e._v(" and "),i("i",[e._v("overlay")]),e._v(". Main layout container element in App.vue is used to define which mode to use by adding specific classes. List\n                    below indicates the style classes for each mode.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ul",[i("li",[e._v('Static: "layout-wrapper layout-static"')]),i("li",[e._v('Overlay: "layout-wrapper layout-overlay"')])])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v('There are two alternatives as the menu colors schemes; "light" and "dark". A color scheme is applied using the '),i("i",[e._v("layout-sidebar-light")]),e._v(" or "),i("i",[e._v("layout-sidebar-dark")]),e._v("\n                to the sidebar element.")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("Sigma uses PrimeFlex CSS Grid throughout the samples. Although any grid library can be used, we recommend using PrimeFlex as your layout framework as it is well tested and supported by PrimeVue. PrimeFlex is\n                    available at "),i("a",{attrs:{href:"https://www.npmjs.com/package/primeflex"}},[e._v("NPM")]),e._v(".")])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("p",[e._v("It is suggested to write your customizations in "),i("i",[e._v("_overrides.scss")]),e._v(" file instead of adding them to the\n                    scss files under sass folder to avoid maintenance issues after an update.")])}],a=i("6226"),r={components:{CodeHighlight:a["a"]}},l=r,p=(i("879a"),i("2877")),s=Object(p["a"])(l,o,t,!1,null,"42b4f193",null);n["default"]=s.exports},5150:function(e,n,i){},"879a":function(e,n,i){"use strict";var o=i("5150"),t=i.n(o);t.a}}]);
//# sourceMappingURL=chunk-059144aa.5e97e16e.js.map