_default:
    @just --list

# Start the dev server in the foreground
dev:
    bunx astro dev

# Build the production site
build:
    bunx astro build

# Preview the production build
preview:
    bunx astro preview

# Type-check the project
check:
    bunx astro check

# Install dependencies
install:
    bun install

# Run pre-commit hooks against all files
lint:
    prek run --all-files

# Format code with Prettier
format:
    mise exec -- prettier --write .

# Lint markdown content
mdlint:
    mise exec -- markdownlint-cli2 "src/**/*.md" "src/**/*.mdx"

# Check for broken links (requires a production build)
linkcheck: build
    mise exec -- lychee --root-dir "$(pwd)/dist" dist

# Remove build output and caches
clean:
    rm -rf dist .astro node_modules/.astro
