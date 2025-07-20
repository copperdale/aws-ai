#!/bin/bash

echo "👉 开始执行更新脚本..."

# 步骤 1：删除 docs 中的所有内容
echo "🧹 清空 docs 文件夹内容..."
if [ -d "docs" ]; then
  rm -rf docs/* docs/.* 2>/dev/null
  echo "✅ docs 文件夹已清空。"
else
  echo "⚠️ 未找到 docs 文件夹，已自动创建。"
  mkdir docs
fi

# 步骤 2：复制 out 中的内容到 docs
echo "📁 复制 out 文件夹内容到 docs..."
if [ -d "out" ]; then
  cp -r out/* docs/
  echo "✅ 复制完成。"
else
  echo "❌ 错误：out 文件夹不存在，终止执行。"
  exit 1
fi

# 步骤 3：重命名 _next 为 next（如果存在）
if [ -d "docs/_next" ]; then
  echo "✏️ 重命名 docs/_next 为 docs/next..."
  mv docs/_next docs/next
  echo "✅ 重命名完成。"
else
  echo "ℹ️ 跳过重命名：docs/_next 不存在。"
fi

# 步骤 4：替换所有文件中的 _next 为 next
echo "🔍 正在替换 docs 中所有 .html 和 .js 文件的 '_next' 为 'next'..."
find docs -type f \( -name "*.html" -o -name "*.js" \) -exec sed -i 's/_next/next/g' {} +

if [ "$file_count" -eq 0 ]; then
  echo "⚠️ 未找到任何文件，跳过替换。"
else
  find docs -type f -exec sed -i 's/_next/next/g' {} +
  echo "✅ 共处理 $file_count 个文件，替换完成。"
fi

echo "🎉 所有操作完成！"
