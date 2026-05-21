## Create configmap


## Imperative

    kubectl create cm app-cm --from-literal=firstname=firstnameValue \
         --from-literal=lastname=lastnameValue

## File

  kubectl create cm app-cm --from-literal=firstname=piyush --from-literal=lastname=kouessi --dry-run=client -o yaml > cm.yml