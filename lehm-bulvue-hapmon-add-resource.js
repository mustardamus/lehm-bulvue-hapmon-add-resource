'use strict'

module.exports = {
  name: 'Resource',
  delimiters: '{% %}',

  after ({ srcPath, distPath, variables, utils }) {
    let resourceSingular = variables.resourceName
    let resourcePlural = utils.Handlebars.transform(`{% pluralize "${resourceSingular}" %}`)

    console.log(utils.Chalk.green('\n\nExtend `./client/$state.js` with:'))
    console.log(utils.Chalk.yellow(`
  ${resourcePlural}: [], // objects of currently shown ${resourcePlural}
  ${resourcePlural}IsLoading: false, // indicates if ${resourcePlural} index is loading from server
  ${resourceSingular}: {}, // information about currently shown ${resourceSingular}
  ${resourceSingular}IsLoading: false // indicates if ${resourceSingular} data is loading from server
    `))

    console.log(utils.Chalk.green('\n\nExtend `./client/components/nav-bar/nav-bar.html` with (or wherever it links to the resource):'))
    console.log(utils.Chalk.yellow(`
  <router-link class="nav-item" :to="{ name: '${resourcePlural}-index' }">
    ${resourcePlural}
  </router-link>

  <router-link class="nav-item" :to="{ name: '${resourcePlural}-add' }">
    Add ${resourceSingular}
  </router-link>
    `))
  }
}
