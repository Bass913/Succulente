import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.group(() => {
        Route.post('/register', 'AuthController.register'),
            Route.post('/login', 'AuthController.login'),
            Route.post('/logout', 'AuthController.logout')
    }).prefix('/v1/auth')
}
).prefix('/api')