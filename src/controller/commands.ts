import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Função para adicionar características ao Esquilo
async function adicionarCaracteristicas(req: any, res: any) {
  const { habitat, comidaFavorita, descricao, quantidadePatas, sexo } =
    req.body;

  const novoEsquilo = await prisma.esquilo.create({
    data: {
      habitat,
      comidaFavorita,
      descricao,
      quantidadePatas,
      sexo,
    },
  });

  return res.status(201).send("Características Salvas!");
}

// Função para listar todas características dos Esquilos
async function listarCaracteristicas() {
  const listarEsquilo = await prisma.esquilo.findMany();

  return listarEsquilo;
}

async function buscaCaracteristicas(req: any, res: any) {
  const { id } = req.params;
}

async function editarCaracteristicas(req: any, res: any) {
  const { id } = req.params;
  const { habitat, comidaFavorita, descricao, quantidadePatas, sexo } =
    req.body;
  const editar = await prisma.esquilo.update({
    where: {
      id: id,
    },
    data: {
      habitat: habitat,
      comidaFavorita: comidaFavorita,
      descricao: descricao,
      quantidadePatas: quantidadePatas,
      sexo: sexo,
    },
  });

  return res.status(205).send("Características alteradas com sucesso!");
}

export default {
  adicionarCaracteristicas,
  listarCaracteristicas,
  editarCaracteristicas,
};
