package com.moviles.appsemana07.data.remote

import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Query

data class NetworkUsuario(
    val nombre: String,
    val correo: String,
    val rol: String
)

data class NetworkAnuncio(
    val titulo: String,
    val contenido: String,
    val autor: String
)

interface EduControlApiService {

    @GET("EduControlBackend")
    suspend fun obtenerUsuarios(
        @Query("tipo") tipo: String = "usuarios"
    ): List<NetworkUsuario>

    @POST("EduControlBackend")
    suspend fun registrarUsuario(
        @Body usuario: NetworkUsuario,
        @Query("tipo") tipo: String = "usuarios"
    )

    @GET("EduControlBackend")
    suspend fun obtenerAnuncios(
        @Query("tipo") tipo: String = "anuncios"
    ): List<NetworkAnuncio>

    @POST("EduControlBackend")
    suspend fun publicarAnuncio(
        @Body anuncio: NetworkAnuncio,
        @Query("tipo") tipo: String = "anuncios"
    )
}