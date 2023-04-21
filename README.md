# **Analysis of BeeTree Client by Wanjie Ryan**

A simple analysis of Wanjie Ryan's project named BeeTree Client.

## **Description**

A simple analysis of Wanjie Ryan's project named BeeTree Client.I just wanted to review and analyse the project a little for fun.I have put all of my tips/opinions on the project/web development in general in this file.

## **Tips and Tricks**

- try to base your host url variable on process.env.NODE_ENV(i am talking about the host variable in the [_api.js file_](https://github.com/axense234/BeeTree-client-analysis/blob/main/src/api/api.js))
- since the project already uses redux, you might as well use [_async thunks_](https://redux-toolkit.js.org/api/createAsyncThunk) instead of creating your own api calls like you did in the apiCalls.js file
- try to learn [_eslint_](https://eslint.org) since it is extremely useful for your web development projects(i used it in this project)
- also try to learn to create proper README.MD files and to not use the ones provided by Create React App, try to look up Markdown Tutorials on google/youtube
- try to learn about Licenses so you can license your code
- since you are already using react router, try to learn about the [_Outlet Component_](https://reactrouter.com/en/main/components/outlet), an easy to use and useful to learn component for shared layouts
- your authorization is also pretty weak since it relies on unencrypted data, like having the right email in the localStorage, try to learn about [_JSON Web Tokens_](https://jwt.io)
- your folder structure was also pretty unorganized, try to search up on youtube more about react folder structures
- if you don't already use prettier, try to use it since it makes development way easier(saying this because i have encountered a lot of empty lines/spaces for no reason)

## **Conclusion**

- i was curious about playing around with this project and decided to fork it and try to be useful by giving out some advice.Hope it helped a bit at least.
