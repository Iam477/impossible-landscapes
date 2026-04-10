#!/bin/bash
set -e

MODULE_ID="impossible-landscapes"

# 🔴 HARD-CODED FOUNDRY DATA PATH (FIXED)
FOUNDRY_DATA_PATH="C:/Users/ianam/Documents/Delta_Green/Impossible_Landscapes/FOUNDRY VTT DATA"

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  Building Impossible Landscapes Foundry VTT Module       ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

echo "Using Foundry Data Path:"
echo "$FOUNDRY_DATA_PATH"
echo ""

# Check fvtt-cli is installed
if ! command -v fvtt &> /dev/null; then
    echo "ERROR: fvtt-cli not found. Install with:"
    echo "  npm install -g @foundryvtt/foundryvtt-cli"
    exit 1
fi

# ✅ Set the correct Foundry Data path
fvtt configure set dataPath "$FOUNDRY_DATA_PATH"

# Tell fvtt-cli we're working on this module
fvtt package workon "$MODULE_ID" --type Module

# 🔴 TARGET MODULE OUTPUT DIRECTORY (what you asked for)
OUTPUT_DIR="$FOUNDRY_DATA_PATH/modules/$MODULE_ID/packs"

echo "Writing packs to:"
echo "$OUTPUT_DIR"
echo ""

# Ensure module + pack directories exist
mkdir -p "$OUTPUT_DIR/actors"
mkdir -p "$OUTPUT_DIR/npc-journals"
mkdir -p "$OUTPUT_DIR/locations"
mkdir -p "$OUTPUT_DIR/handouts"
mkdir -p "$OUTPUT_DIR/handler-guide"

# ── Compile each pack ────────────────────────────────────────────────

echo ""
echo "Compiling NPC Actors..."
if ls src/packs/actors/*.json 1> /dev/null 2>&1; then
    fvtt package pack "actors" --inputDirectory "./src/packs/actors" --outputDirectory "$OUTPUT_DIR/"
    echo "  ✓ Actors compiled"
else
    echo "  ⚠ No actor source files found"
fi

echo ""
echo "Compiling NPC Journals..."
if ls src/packs/npc-journals/*.json 1> /dev/null 2>&1; then
    fvtt package pack "npc-journals" --inputDirectory "./src/packs/npc-journals" --outputDirectory "$OUTPUT_DIR/"
    echo "  ✓ NPC Journals compiled"
else
    echo "  ⚠ No NPC journal source files"
fi

echo ""
echo "Compiling Locations..."
if ls src/packs/locations/*.json 1> /dev/null 2>&1; then
    fvtt package pack "locations" --inputDirectory "./src/packs/locations" --outputDirectory "$OUTPUT_DIR/"
    echo "  ✓ Locations compiled"
else
    echo "  ⚠ No location source files"
fi

echo ""
echo "Compiling Handouts..."
if ls src/packs/handouts/*.json 1> /dev/null 2>&1; then
    fvtt package pack "handouts" --inputDirectory "./src/packs/handouts" --outputDirectory "$OUTPUT_DIR/"
    echo "  ✓ Handouts compiled"
else
    echo "  ⚠ No handout source files"
fi

echo ""
echo "Compiling Handler Guide..."
if ls src/packs/handler-guide/*.json 1> /dev/null 2>&1; then
    fvtt package pack "handler-guide" --inputDirectory "./src/packs/handler-guide" --outputDirectory "$OUTPUT_DIR/"
    echo "  ✓ Handler Guide compiled"
else
    echo "  ⚠ No handler guide source files"
fi

echo ""
echo "══════════════════════════════════════════════════════════"
echo "Build complete!"
echo "══════════════════════════════════════════════════════════"