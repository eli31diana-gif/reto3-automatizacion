Feature: Login fallido

  Scenario: Usuario bloqueado no puede iniciar sesión
    Given el usuario intenta iniciar sesión con usuario bloqueado
    Then debe ver un mensaje de error
