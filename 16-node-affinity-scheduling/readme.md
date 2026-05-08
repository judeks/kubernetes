# Node  Affinity with labels

* Main concept
   
   Matching the label define on a node with set affinity on a pod with operator(!=, =, in)

   Main point: Even though we mades changes on node label the running pods won't be get impacted


* requiredDuringSchedulingIgnoredDuringExecution
    
    The pod will be scheduled on the matching node label by the affinity

* preferredDuringSchedulingIgnoredDuringExecution

   The pod will be scheduled if we have a node with matching label affinity otherwise it will be scheduled on another existing node


* Create label on a node for affinity

        kubectl label nodes cka-simoncluster-multi-node2-worker disktype=ssd

* Show labels on a nodes

         kubectl get nodes --show-labels

* Show labels on a specific nodes
 
         kubectl get nodes cka-simoncluster-multi-node2-worker --show-labels

* kubectl get pods to see pods a scheduling and running
   
         kubectl get pods
         kubectl get pods -o wide 
 
 * Unlabel node
   
        kubectl label node cka-simoncluster-multi-node2-worker disktyp-

 * Specify only operaty affinity

    k8s will just use the key to schedule the pod

  * Recommendations

    Use tains/labels(node) and toleration/nodeAffinity(pods) to make sure pods are being sheduled propely