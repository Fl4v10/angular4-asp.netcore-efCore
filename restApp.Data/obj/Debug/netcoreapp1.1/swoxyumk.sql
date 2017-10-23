IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Restaurantes] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(max),
    CONSTRAINT [PK_Restaurantes] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Pratos] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(max),
    [RestauranteId] int NOT NULL,
    [Valor] decimal(18, 2) NOT NULL,
    CONSTRAINT [PK_Pratos] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Pratos_Restaurantes_RestauranteId] FOREIGN KEY ([RestauranteId]) REFERENCES [Restaurantes] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_Pratos_RestauranteId] ON [Pratos] ([RestauranteId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20170801212217_initial', N'1.1.2');

GO

