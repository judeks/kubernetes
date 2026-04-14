## 1- Installation du cluster multi-node (VMs) avec KIND

* Creation d'un cluster
Pour installer kind suit ce lien en fonction de ton architecture OS 

*Create cluster with a specific version and rename it*

 kind create cluster --image=kindest/node:v1.34.3@sha256:08497ee19eace7b4b5348db5c6a1591d7752b164530a36f855cb0f2bdcbadd48 --name=cka-simoncluster1

 * Knowing a current cluster

 kubectl cluster-info --context kind-cka-simoncluster1

 retrieve cluster information from a this particular context

## 2 - Install kubectl command line tools for k8s
To check if kubectl has already install run

        kubectl version --client

otherwise use this link based on your OS

    links : https://kubernetes.io/docs/tasks/tools/

## What's happening when we run
      kubectl get nodes
  it's will reachout control-plane throughout APISERVER component afer authenticate,validation the request and then return data from etcd component, then get back running pods

       Result: 
        cka-simoncluster1-control-plane   Ready    control-plane   32m   v1.34.3


## Create cluster with multiple node or VM
   Configuring your kind cluster
  * create config-multi-node.yml file
   ___

      kind: Cluster
        apiVersion: kind.x-k8s.io/v1alpha4
        nodes:
        - role: control-plane
        - role: worker
        - role: worker
  * Apply this command to create the new cluster
     
    
        kind create cluster --image=kindest/node:v1.34.3@sha256:08497ee19eace7b4b5348db5c6a1591d7752b164530a36f855cb0f2bdcbadd48 --name cka-simoncluster-multi-node2 --config config-multi-node.yml

  * See create cluster

         kubectl cluster-info --context kind-cka-simoncluster-multi-node2 
  * See all contexts

          kubectl config get-contexts

  * Switch to specifi context to a cluster 

        kubectl config use-context kind-cka-simoncluster1
   
   * Retrieve nodes about after switching to a specific context

          kubectl get nodes


  




