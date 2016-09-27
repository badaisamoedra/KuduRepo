# KuduRepo

## Local Install ##
1. Open the KuduProject folder.
2. This was originally an azure site created with the `--git` flag.  Therefore delete the .git folder and .gitignore files first.
3. `azure site create --git someveryuniquename`
  replace "someveryuniquename" with a very unique name.  ;p
4. `azure site deploymentscript --node`

Error message is:
`Invalid start-up command "ng build" in package.json. Please use the format "node <script relative path>".` 
  
I've also tried this  
`"start": "node ./node_modules/angular-cli/bin/ng build --prod"`  
But the problem is I think Kudu runs `npm install` only in prod mode, so the devDependencies are never installed?
