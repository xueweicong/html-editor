import Mock from "mockjs"; // 引入mockjs

import templateData from "./mockData/templateData";

Mock.mock("/data/templateData", "get", templateData); // templateData
