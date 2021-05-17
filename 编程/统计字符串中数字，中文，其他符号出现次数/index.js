
const str = "AABBCDefghhhiijjkk这1个字符串串串请把字符串里每个字符出现了多少次？?😊😄🦐🦀️🚀,.20210101123456。"

function resolveStringType1(str) {
  let mapNumber = {};
  let mapAbc = {};
  let mapCh = {};
  let mapEtc = {}
  for (const s of str) {
    if (/\d/.test(s)) {
      mapNumber[s] = (mapNumber[s] || 0) + 1
    } else if (/[a-zA-Z]/.test(s)) {
      mapAbc[s] = (mapAbc[s] || 0) + 1
    } else if (/[\u4e00-\u9fa5]/.test(s)) {
      mapCh[s] = (mapCh[s] || 0) + 1
    } else {
      mapEtc[s] = (mapEtc[s] || 0) + 1
    }
  }

  return [mapNumber, mapAbc, mapCh, mapEtc];
}

resolveStringType1(str)