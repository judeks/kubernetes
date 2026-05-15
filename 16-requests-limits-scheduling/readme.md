
# FIXED THE CAPCITY TAKEN BY PODS on a node before we have OOM (Out of Memory) of pods a nd crashed

#CAPACITY

* Expose metrics  for testing request and limits

      kubectl apply -f metrics-server.yaml 

*  Get pods on kube-system namesapce
      
         kubectl get pods -n kube-system
 
* See metrics of nodes
    
       kubectl top node

* Create NameSpace first

      kubectl create ns mem-example


* Delelte pods without being inside namespace

      kubeclt delete pod/pod-name -n namesapce

* Know limits metrics of pod

      kubectl  top pod memory-demo -n mem-example

* Get all pods in a specific namespace

      kubectl get pod -n mem-example

* Get details about pod(debug pod) in specific name

      kubectl describe pod memory-demo-2 -n mem-example