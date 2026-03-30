module.exports = {
  apps : [
    {
      name   : "config-server",
      script : "java",
      args   : "-jar ./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
      windowsHide: true,
      autorestart: true, // MUST BE TRUE
      watch: false,
      log_file: "./logs/config-server.log",
    },
    {
      name   : "eureka-server",
      script : "java",
      args   : "-jar ./eureka-server/target/eureka-server-0.0.1-SNAPSHOT.jar",
      windowsHide: true,
      autorestart: true, // MUST BE TRUE
      restart_delay: 20000, 
      exp_backoff_restart_delay: 100,
      log_file: "./logs/eureka-server.log",
    },
    {
      name   : "api-gateway",
      script : "java",
      args   : "-jar ./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
      windowsHide: true,
      autorestart: true, // MUST BE TRUE
      restart_delay: 40000,
      exp_backoff_restart_delay: 100,
      log_file: "./logs/api-gateway.log",
    }
  ]
}