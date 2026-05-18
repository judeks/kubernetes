# AutoScaling in kubernetes


## Horizontal pod autoscaling(HPA) for pods
   
   configure pods to scale until 10 pods and min 1 pods on horizontal autoscaling

        kubectl autoscale deploy php-apache --cpu-percent=50 --min=1 --max=10




   INCREASE THE LOAD powershell for testing (windows)

    kubectl run -i --tty load-generator --rm --image=busybox:1.28 --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- http://php-apache; done"


  Real time memory threashold and replicas for hpa-apache pods

        kubectl get hpa --watch



## Vertical pod autoscaling(Service managed)

