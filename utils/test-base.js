const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForValidLogin :    {
            username : "orkestra.test.user+oia.orkestrator@gmail.com",
            password : "GkzL9r5HMCyaZ3vb",
        },
        testDataForInvalidPassword:{
            username : "orkestra.test.user+oia.orkestrator@gmail.com",
            password : "GkzL9r5HMCyaZ3vb",
        },
        testDataForInvalidEmail:{
            username : "orkestra@gmail.com",
            password : "GkzL9r5HMCyaZ3vb",
        },


    }

)