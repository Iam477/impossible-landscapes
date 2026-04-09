#!/bin/bash
# ══════════════════════════════════════════════════════════════════════
# Impossible Landscapes — Foundry VTT Module Build Script
# ══════════════════════════════════════════════════════════════════════
#
# Prerequisites:
#   npm install -g @foundryvtt/foundryvtt-cli
#   fvtt configure set dataPath "/path/to/your/FoundryVTT/Data"
#
# Usage:
#   cd impossible-landscapes/
#   chmod +x build.sh
#   ./build.sh
#
# ══════════════════════════════════════════════════════════════════════

set -e

MODULE_ID="impossible-landscapes"

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  Building Impossible Landscapes Foundry VTT Module       ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Check fvtt-cli is installed
if ! command -v fvtt &> /dev/null; then
    echo "ERROR: fvtt-cli not found. Install with:"
    echo "  npm install -g @foundryvtt/foundryvtt-cli"
    exit 1
fi

# Tell fvtt-cli we're working on this module
fvtt package workon "$MODULE_ID" --type Module

# Create output pack directories
mkdir -p packs/actors
mkdir -p packs/npc-journals
mkdir -p packs/locations
mkdir -p packs/handouts
mkdir -p packs/handler-guide

# ── Compile each pack ────────────────────────────────────────────────

echo ""
echo "Compiling NPC Actors..."
if [ -d "src/packs/actors" ] && [ "$(ls -A src/packs/actors/*.json 2>/dev/null)" ]; then
    fvtt package pack "actors" --inputDirectory "./src/packs/actors"
    echo "  ✓ Actors compiled ($(ls src/packs/actors/*.json | wc -l) files)"
else
    echo "  ⚠ No actor source files found in src/packs/actors/"
fi

echo ""
echo "Compiling NPC Journals..."
if [ -d "src/packs/npc-journals" ] && [ "$(ls -A src/packs/npc-journals/*.json 2>/dev/null)" ]; then
    fvtt package pack "npc-journals" --inputDirectory "./src/packs/npc-journals"
    echo "  ✓ NPC Journals compiled ($(ls src/packs/npc-journals/*.json | wc -l) files)"
else
    echo "  ⚠ No NPC journal source files yet — run journal generator first"
fi

echo ""
echo "Compiling Locations..."
if [ -d "src/packs/locations" ] && [ "$(ls -A src/packs/locations/*.json 2>/dev/null)" ]; then
    fvtt package pack "locations" --inputDirectory "./src/packs/locations"
    echo "  ✓ Locations compiled ($(ls src/packs/locations/*.json | wc -l) files)"
else
    echo "  ⚠ No location source files yet"
fi

echo ""
echo "Compiling Clues & Handouts..."
if [ -d "src/packs/handouts" ] && [ "$(ls -A src/packs/handouts/*.json 2>/dev/null)" ]; then
    fvtt package pack "handouts" --inputDirectory "./src/packs/handouts"
    echo "  ✓ Handouts compiled ($(ls src/packs/handouts/*.json | wc -l) files)"
else
    echo "  ⚠ No handout source files yet"
fi

echo ""
echo "Compiling Handler's Guide..."
if [ -d "src/packs/handler-guide" ] && [ "$(ls -A src/packs/handler-guide/*.json 2>/dev/null)" ]; then
    fvtt package pack "handler-guide" --inputDirectory "./src/packs/handler-guide"
    echo "  ✓ Handler's Guide compiled ($(ls src/packs/handler-guide/*.json | wc -l) files)"
else
    echo "  ⚠ No handler guide source files yet"
fi

echo ""
echo "══════════════════════════════════════════════════════════"
echo "Build complete!"
echo ""
echo "Next steps:"
echo "  1. Copy this entire folder to your Foundry Data/modules/ directory:"
echo "     cp -r . /path/to/FoundryVTT/Data/modules/$MODULE_ID"
echo "  2. Launch Foundry VTT"
echo "  3. Go to Add-on Modules → enable '$MODULE_ID'"
echo "  4. In your world, go to Compendium Packs to find your content"
echo "  5. Right-click entries → Import to bring them into your world"
echo "══════════════════════════════════════════════════════════"
