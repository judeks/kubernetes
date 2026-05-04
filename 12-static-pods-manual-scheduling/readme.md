
# Manual scheduling , labels, and selectors in K8S (KIND)

  * Get scheduler form control plan

    kubectl pods -n kube-system | grep schedular

# Statics pod

   Statics pods are pod that are menaged by schedular and it is responsible for scheduling this types of pods
   
   * Access a kind node as controle-plane  or ssh 
       docker exec -t simoncluster-multi-node2-control-plane bash

   * Static pods are stored in directory and kubelet monitoring this directory
       
          ps -ef | grep kubelet

   * config folder for all static pods on controle-plane
      
         etcd.yaml  kube-apiserver.yaml  kube-controller-manager.yaml  kube-scheduler.yaml

   * remove kube-schedular.yml from manifests

   *  kubectl get po -n kube-system | grep scheduler
        nothing

   *  kubectl get po -n kube-system

   * kubectl run nginx --image=nginx (imperative)

   *  kubectl get pods(Pending)

   * kubectl describe pod/nginx(node: none)

   * mv /tmp/kube-scheduler.yaml . 

   *  kubectl get pods(node: running)

   *  k get po -n kube-system | grep scheduler(schedular: running)



# Manual scheduling

   * Create pod

       kubectl run nginx --image=nginx -o yaml > manuel-pod.yml
   
   * Set this line inside spec section yaml

       nodeName: cka-simoncluster-multi-node2-worker

   * Move scheduler in manifest on a control-plane

   * kubectl get pods -n kube-system | grep scheduler

   * kubectl apply -f manuel-pod.yml

    Even the schedular is removed the pod has been scheduled on ka-simoncluster-multi-node2-worker


    * kubectl get pods -o wide

       Check  pods running on specify node by manual scheduling

    
# labels and selectors

   filtering for ressources for deployment

  * kubectl get pods --show-labels
      show all pods with their label

  * kubectl get pods --selector tier=frontend(label=name-label) or  k get pods --selector tier=backend

      Show only or retrieve pods that matches specify label with the label tier:frontend tier=backend in pod

 # amespace
 Logical seperation of ressources in group