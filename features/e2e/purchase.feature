Feature: Compra de producto

  Scenario: Compra exitosa de un producto
    Given el usuario inicia sesión con credenciales válidas
    When agrega un producto al carrito y completa la compra
    Then la orden debe confirmarse correctamente
