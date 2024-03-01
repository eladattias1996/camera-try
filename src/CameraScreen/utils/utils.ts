interface HintMessageParams {
  numberOfFaces: number;
}

export const getHintMessage = (params: HintMessageParams) => {
  if (params.numberOfFaces === 0) return 'חייב לצלם פנים';
  if (params.numberOfFaces > 1) return 'אין לצלם יותר מאדם אחד';
};
