Feature: Login API usuarios

  Escenario: Login exitoso de múltiples usuarios
    Given realizo login vía API con 3 usuarios
    Then el token debe ser válido
