resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'

dependency "vrp"
ui_page 'html/index.html'
client_scripts{ 
 
  "client.lua"
}

server_scripts{ 

  "server.lua"
}



files {
  'html/index.html',
  'html/style.css',
  'html/handler.js'
}