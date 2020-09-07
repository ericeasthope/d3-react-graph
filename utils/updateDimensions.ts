// utils/updateDimensions.ts

const updateDimensions = () => {
  simulation
    .force("x", forcer.forceX(context.width / 2))
    .force("y", forcer.forceY(context.height / 2))
    .force("y", forcer.forceZ(context.width / 2))
    .force(
      "center",
      forcer.forceCenter(
        context.width / 2,
        context.height / 2,
        context.width / 2
      )
    );

  simulation.alpha(1).restart();
};

export default updateDimensions;
