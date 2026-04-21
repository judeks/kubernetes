# Pod en kubernetes 

- Creating nginx pod through imperative way

        k run nginx-pod --image=nginx:latest
- Create pod through yaml files
    
        kubectl create -f nginx-pod.yml 
        kubectl apply -f nginx-pod.yml
- Delete pod through yaml file
 
        kubectl delete -f nginx-pod.yml

- Get available pods 

       kubectl get pods 

- Troubleshooting

       kubectl describe pod nginx-pod

- Update the pod itself on a node
    
      kubectl edit pod nginx-pod

- Get inside pod to execute shell command
     
        kubectl exec -it nginx-pod -- sh


- Preview pod creation without apply it

        kubectl run nginx --image=nginx --dry-run=client

- Get all details about a pod

        kubectl describe pod nginx-pod

- See labels of pods

        kubectl get pods nginx-pod --show-labels

- See which node pods are running
          
          kubectl get pods -o wide
- Get all cluster's node 

        kubectl get nodes