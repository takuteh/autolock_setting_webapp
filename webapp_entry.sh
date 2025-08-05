#!/bin/sh

find . -type f -name '*template*' | while read file; do
  # 新しいファイル名：template を削除
  newfile="$(echo "$file" | sed 's/_template//')"

  # ファイルをコピーして BASE_URL を置換
  sed "s|BASE_URL|$BASE_URL|g" "$file" > "$newfile"
done
