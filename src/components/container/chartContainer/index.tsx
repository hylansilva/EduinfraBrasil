import { Map } from "../../Map";
import * as S from "./styles";

export const ChartContainer: React.FC = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Selecione a região:</S.Title>
      </S.TitleWrapper>
      <S.MapWrapper>
        <Map />
      </S.MapWrapper>
    </S.Container>
  );
};
