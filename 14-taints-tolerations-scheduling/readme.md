## Tolerations

   this is made on pod

## Taints

   this is made on node

## Toleration
    
    this is made on pod

## Effect

   this is scheduling type which can be (noSchedule, preferNoSchedule, noExecute)

   * noSchedule(newer pods)
     only work on newer pod

   * preferNoSchedule
    Try to apply toleration but it's not guarantee it
   
   * noExecute

   * Taint a node(only accept pod that has only gpu=true)
     
         kubectl taint node cka-simoncluster-multi-node2-worker gpu=true:NoSchedule

   * Check taint node
         
          kubectl describe node cka-simoncluster-multi-node2-worker | grep -i taint
   * Create pod
      
         kubectl run nginx --image=nginx 
   
   * Create redis image et redirect to file redis.yaml

         kubectl run redis --image=redis --dry-run=client -o yaml > redis.yml

   * Untaint node(Remove taint)

          k taint node cka-simoncluster-multi-node2-worker gpu=true:NoSchedule-

## Selector

 * NodeSelector

 * Configure label on node

         k label node cka-simoncluster-multi-node2-worker gpu=false

 * Show all labels on nodes

       kubectl get nodes --show-labels
       
 * Remove label on a node

    kubectl label node cka-simoncluster-multi-node2-worker gpu-
    
