## Kubernetes Namespace

- Get all namespaces
     
      kubectl get ns
      
- Get all detail all info about a namesapce

        kubectl get all --namespace=kube-system
        kubectl get all -n kube-system

- Create namesapce imperatively (command line)

        kubectl create ns demo-namespace

- Remove namespace from cluster
   
       kubectl delete ns/demo-namespace

- Create a deployment nginx-demo inside namespace demo-namespace

      kubectl create deploy nginx-demo --image=nginx -n demo-namespace

- Get a deployment pod related to a specific namespace

       kubectl get deploy -n demo-namespace

