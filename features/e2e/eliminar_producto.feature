Feature: Eliminar producto del carrito

  Scenario: El usuario elimina un producto del carrito y verifica que no esté en la lista
    Given el usuario inicia sesión con credenciales válidas
    When agrega un producto al carrito
    And elimina el producto del carrito
    Then el carrito debe estar vacío
