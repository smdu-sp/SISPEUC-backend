-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(7) NULL,
    `nome` VARCHAR(255) NULL,
    `permissao` INTEGER NULL,
    `status_user` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permissoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idservidor` INTEGER NULL,

    INDEX `FK_permissoes_servidores`(`idservidor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servidores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL DEFAULT '0',
    `login` VARCHAR(50) NOT NULL DEFAULT '0',
    `email` VARCHAR(255) NOT NULL DEFAULT '0',
    `rf` VARCHAR(7) NOT NULL DEFAULT '0',
    `unidade` VARCHAR(255) NOT NULL DEFAULT '0',
    `obs` VARCHAR(255) NOT NULL DEFAULT '0',
    `status_user` VARCHAR(50) NULL,
    `sigla_unidade` VARCHAR(50) NULL,

    UNIQUE INDEX `servidores_login_key`(`login`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `permissoes` ADD CONSTRAINT `FK_permissoes_servidores` FOREIGN KEY (`idservidor`) REFERENCES `servidores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
