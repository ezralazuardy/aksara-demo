"use client";

import { useState } from "react";
import { TranslateConfiguration, translate } from "@ezralazuardy/aksara";
import { CopyIcon, CheckIcon, ArrowLeftRight, TrashIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Translator() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [copiedTranslation, setCopiedTranslation] = useState(false);
  let typeMode = true;
  let withSpace = true;
  let withMurda = false;

  function getConfig(): TranslateConfiguration {
    return {
      typeMode: typeMode,
      withSpace: withSpace,
      withMurda: withMurda,
    } as TranslateConfiguration;
  }

  function handleTranslate(text: string) {
    setSourceText(text);
    setTranslatedText(translate(text, getConfig()));
  }

  function handleClearText() {
    setSourceText("");
    setTranslatedText("");
  }

  function handleSwapText() {
    const translated = translatedText;
    setTranslatedText(sourceText);
    setSourceText(translated);
  }

  function handleCopyToClipboard() {
    if (!navigator?.clipboard) return;
    navigator.clipboard.writeText(translatedText);
    setCopiedTranslation(true);
    setTimeout(() => setCopiedTranslation(false), 2000);
  }

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="space-y-4">
        <label className="block font-medium" htmlFor="source-text">
          Source Text
        </label>
        <div className="relative">
          <textarea
            className="w-full text-lg border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none"
            id="source-text"
            placeholder="Enter a text to translate..."
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            rows={8}
            value={sourceText}
            onChange={(e) => handleTranslate(e.target.value)}
          />
          {sourceText.length <= 0 ? null : (
            <div className="absolute top-3 right-3 flex justify-center bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={handleClearText}
              >
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Clear Text</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4">
        <label className="block font-medium" htmlFor="translated-text">
          Translated Text
        </label>
        <div className="relative">
          <textarea
            className="w-full text-lg border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-transparent resize-none"
            id="translated-text"
            placeholder="Translated text goes here..."
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            rows={8}
            value={translatedText}
            readOnly
          />
          {translatedText.length <= 0 ? null : (
            <div className="absolute top-3 right-3 flex justify-center bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={handleSwapText}
              >
                <ArrowLeftRight className="w-4 h-4" />
                <span className="sr-only">Swap Text</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8"
                onClick={handleCopyToClipboard}
              >
                {copiedTranslation ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <CopyIcon className="w-4 h-4" />
                )}
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex space-x-8 justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="type-mode"
                  defaultChecked={typeMode}
                  onCheckedChange={(checked: boolean) => {
                    typeMode = checked;
                    handleTranslate(sourceText);
                  }}
                />
                <Label htmlFor="type-mode">Type Mode</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Optimized for natural, free, and fast typing mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="with-space"
                  defaultChecked={withSpace}
                  onCheckedChange={(checked: boolean) => {
                    withSpace = checked;
                    handleTranslate(sourceText);
                  }}
                />
                <Label htmlFor="with-space">With Space</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add space for each word in sentence</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="with-murda"
                  defaultChecked={withMurda}
                  onCheckedChange={(checked: boolean) => {
                    withMurda = checked;
                    handleTranslate(sourceText);
                  }}
                />
                <Label htmlFor="with-murda">With Murda</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Translate capital latin letters into Murda letters</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
