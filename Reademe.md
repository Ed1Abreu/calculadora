
<p align="center">
    Calculadora 
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🐳 Inicializando o Docker
  ## Imagem Docker
    calculadora-nginx
  ### Instale o Docker Desktop https://www.docker.com/products/docker-desktop/ 

  ### Proximo
  - Digitar comando:
                  
        docker pull nginx

  ### 3. Terceiro 
  - Use esse comando no seu terminal para iniciar a aplicação no seu localhost 

        
        docker run --hostname=d70077d0b91a --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NGINX_VERSION=1.25.3 --env=PKG_RELEASE=1 --env=NJS_VERSION=0.8.2 --network=calculadora_calculadora -p 30002:80 --label='com.docker.compose.config-hash=f0dffcd5ea053a7410494670874a61ae34054a9ea6026f0f14186fbf82df6636' --label='com.docker.compose.container-number=1' --label='com.docker.compose.depends_on=' --label='com.docker.compose.image=sha256:2fdecabf353f25defb7d0518036343fec260f60bc46f2b73facd075819e06e35' --label='com.docker.compose.oneoff=False' --label='com.docker.compose.project=calculadora' --label='com.docker.compose.project.config_files=C:\Users\edvan\OneDrive\Desktop\calculadora\compose.yaml' --label='com.docker.compose.project.working_dir=C:\Users\edvan\OneDrive\Desktop\calculadora' --label='com.docker.compose.service=proxy' --label='com.docker.compose.version=2.23.0' --label='maintainer=NGINX Docker Maintainers <docker-maint@nginx.com>' --runtime=runc -d calculadora-nginx

    http://localhost:30002
