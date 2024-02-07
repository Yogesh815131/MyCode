
to install latest version of angular : npm i -g @angular/cli
to install angular cli versionwise : npm i -g @angular/cli@16
to check installed or not : ng v

create project : ng new projectName

failure: delete node_modules folder and regenerate it by : npm i or npm install
or if nde_module not present in structure create new project again.

to run project always open terminal on project folder : ng serve/ ng s / ng serve --open / ng s -o 

to resolve powershell unautherised issue : Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

after taking pull my branch if u want to run my code >> npm i then ng s -o

compo: "ng g c 'componantName'"

create module:>> "ng g m 'ModuleName' --routing"

create pipe command:>> "ng g p anyname"
create directive command:>> "ng g d anyname"
create shared module command :>> "ng g m anyname"

 install npm server command :>> "npm install json-server"
 start server command :>>"json-server --watch db.json" OR  "npx json-server --watch db.json"