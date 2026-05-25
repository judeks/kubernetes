
User join the team, we have to allow him to access k8s


1- Generate private key

     openssl genrsa -out simon.key

2 - Generate new certificate signing request

     openssl req -new -key simon.key -out simon.csr -subj "/CN=simon"

3 - admin user csr to create certificate
    
- encode crs to one line

         cat simon.csr | base64 | tr -d "\n"

4 - Generate certificate request object
        
     kubectl apply -f csr-simon.yml 

5 - Check if admin valide this certificate request object
   
       kubectl get csr

6 - Approve by admin certificate k8s

        kubectl describe csr simon

        kubectl certificate approve simon

7 - Share certificate generated with the user

        kubectl get csr simon -o yaml > issuecert.yml

        echo "certificate-key-approve" | base64 -d


   

