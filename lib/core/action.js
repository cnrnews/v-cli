var inquirer = require('inquirer')
var downloadFun = require('../core/download')
var config = require('./../../config')
// 提供可选项
const myAction = function (project, args) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'framwork',
        choices: config.framework,
        message: '请选择你使用的框架',
      },
    ])
    .then((answer) => {
      downloadFun(config.frameworkUrl[answer.framwork], project)
    })
}
module.exports = myAction
